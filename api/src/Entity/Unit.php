<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\UnitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UnitRepository::class)]
#[ApiResource(mercure: true)]
class Unit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\OneToMany(mappedBy: 'units', targetEntity: UnitType::class)]
    private Collection $unitType;

    #[ORM\OneToMany(mappedBy: 'unit', targetEntity: DataType::class)]
    private Collection $dataTypes;

    public function __construct()
    {
        $this->unitType = new ArrayCollection();
        $this->dataTypes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, UnitType>
     */
    public function getUnitType(): Collection
    {
        return $this->unitType;
    }

    public function addUnitType(UnitType $unitType): self
    {
        if (!$this->unitType->contains($unitType)) {
            $this->unitType->add($unitType);
            $unitType->setUnits($this);
        }

        return $this;
    }

    public function removeUnitType(UnitType $unitType): self
    {
        if ($this->unitType->removeElement($unitType)) {
            // set the owning side to null (unless already changed)
            if ($unitType->getUnits() === $this) {
                $unitType->setUnits(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, DataType>
     */
    public function getDataTypes(): Collection
    {
        return $this->dataTypes;
    }

    public function addDataType(DataType $dataType): self
    {
        if (!$this->dataTypes->contains($dataType)) {
            $this->dataTypes->add($dataType);
            $dataType->setUnit($this);
        }

        return $this;
    }

    public function removeDataType(DataType $dataType): self
    {
        if ($this->dataTypes->removeElement($dataType)) {
            // set the owning side to null (unless already changed)
            if ($dataType->getUnit() === $this) {
                $dataType->setUnit(null);
            }
        }

        return $this;
    }
}
