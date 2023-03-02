<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use App\Repository\UnitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UnitRepository::class)]
#[ApiResource(security: "is_granted('ROLE_USER')")]
#[Get]
#[Put(security: "is_granted('ROLE_ADMIN')")]
#[GetCollection]
#[Post(security: "is_granted('ROLE_ADMIN')")]
#[Delete(security: "is_granted('ROLE_ADMIN')")]
class Unit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\OneToMany(mappedBy: 'unit', targetEntity: DataType::class)]
    private Collection $dataTypes;

    #[ORM\ManyToOne(inversedBy: 'units')]
    #[ORM\JoinColumn(nullable: false)]
    private ?UnitType $unit_type = null;

    public function __construct()
    {
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

    public function getUnitType(): ?UnitType
    {
        return $this->unit_type;
    }

    public function setUnitType(?UnitType $unit_type): self
    {
        $this->unit_type = $unit_type;

        return $this;
    }
}
