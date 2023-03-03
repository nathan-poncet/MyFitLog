<?php

namespace App\Entity;

use App\Repository\DataRepository;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Link;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DataRepository::class)]
#[ApiResource()]
#[ApiResource(
    uriTemplate: '/users/{id}/data',
    uriVariables: [
        'id' => new Link(
            fromClass: User::class,
            toProperty: '_user'
        )
    ],
    operations: [
        new GetCollection(),
    ],
    normalizationContext: ['groups' => ['data:read']],
)]
// #[ApiFilter(DateFilter::class, properties: ['date'])]
class Data
{
    #[Groups(['data:read'])]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['data:read'])]
    #[ORM\Column]
    private ?float $_value = null;
    
    #[Groups(['data:read'])]
    #[ORM\Column(type: Types::DATETIMETZ_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\ManyToOne(inversedBy: 'datas')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $_user = null;

    #[Groups(['data:read'])]
    #[ORM\ManyToOne(inversedBy: 'datas')]
    #[ORM\JoinColumn(nullable: false)]
    private ?DataType $dataType = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

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

    public function getUser(): ?User
    {
        return $this->_user;
    }

    public function setUser(?User $_user): self
    {
        $this->_user = $_user;

        return $this;
    }

    public function getDataType(): ?DataType
    {
        return $this->dataType;
    }

    public function setDataType(?DataType $dataType): self
    {
        $this->dataType = $dataType;

        return $this;
    }
}
