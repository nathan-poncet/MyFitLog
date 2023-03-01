<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\DataRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DataRepository::class)]
#[ApiResource(security: "is_granted('ROLE_ADMIN') or object.owner == user")]
class Data
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $_date = null;

    #[ORM\Column]
    private ?float $_value = null;

    #[ORM\ManyToOne(inversedBy: 'data')]
    #[ORM\JoinColumn(nullable: false)]
    private ?DataType $data_type = null;

    #[ORM\ManyToOne(inversedBy: 'data')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $_user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->_date;
    }

    public function setDate(\DateTimeInterface $_date): self
    {
        $this->_date = $_date;

        return $this;
    }

    public function getValue(): ?float
    {
        return $this->_value;
    }

    public function setValue(float $_value): self
    {
        $this->_value = $_value;

        return $this;
    }

    public function getDataType(): ?DataType
    {
        return $this->data_type;
    }

    public function setDataType(?DataType $data_type): self
    {
        $this->data_type = $data_type;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->_user;
    }

    public function setUser(?User $_user): self
    {
        $this->_user = $_user;

        return $this;
    }
}
