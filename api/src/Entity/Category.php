<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
#[ApiResource]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\OneToMany(mappedBy: 'category', targetEntity: DataType::class)]
    private Collection $dataTypes;

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
            $dataType->setCategory($this);
        }

        return $this;
    }

    public function removeDataType(DataType $dataType): self
    {
        if ($this->dataTypes->removeElement($dataType)) {
            // set the owning side to null (unless already changed)
            if ($dataType->getCategory() === $this) {
                $dataType->setCategory(null);
            }
        }

        return $this;
    }
}
