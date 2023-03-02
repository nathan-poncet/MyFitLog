<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Data;
use App\Entity\DataType;
use App\Entity\Goal;
use App\Entity\Unit;
use App\Entity\UnitType;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }
    public function load(ObjectManager $manager): void
    {
        // Create Admin User
        $user = new User();
        $user->setEmail('admin@myfitlog.com');
        $user->setRoles(['ROLE_ADMIN']);

        $password = $this->hasher->hashPassword($user, 'admin');
        $user->setPassword($password);

        $manager->persist($user);


        $unitType = new UnitType();
        $unitType->setName("Temps");
        $manager->persist($unitType);

        $unit = new Unit();
        $unit->setName("h");
        $unit->setUnitType($unitType);
        $manager->persist($unit);

        $unit = new Unit();
        $unit->setName("min");
        $unit->setUnitType($unitType);
        $manager->persist($unit);

        $unit = new Unit();
        $unit->setName("s");
        $unit->setUnitType($unitType);
        $manager->persist($unit);


        // Create User and his data
        $user = new User();
        $user->setEmail('user@myfitlog.com');
        $user->setRoles(['ROLE_USER']);

        $password = $this->hasher->hashPassword($user, 'admin');
        $user->setPassword($password);

        $manager->persist($user);


        $unitType = new UnitType();
        $unitType->setName("Autre");
        $manager->persist($unitType);

        $unit = new Unit();
        $unit->setName("kg/cm2");
        $unit->setUnitType($unitType);
        $manager->persist($unit);

        $unit = new Unit();
        $unit->setName("%");
        $unit->setUnitType($unitType);
        $manager->persist($unit);

        $category = new Category();
        $category->setName("Sommeil");
        $manager->persist($category);

        $data_type = new DataType();
        $data_type->setName("Qualité du sommeil");
        $data_type->setUnit($unit);
        $data_type->setCategory($category);
        $manager->persist($data_type);

        $data = new Data();
        $data->setDataType($data_type);
        $data->setDate(new \DateTime("now"));
        $data->setUser($user);
        $data->setValue(80.6);
        $manager->persist($data);

        $data = new Data();
        $data->setDataType($data_type);
        $data->setDate(new \DateTime("2023-02-28"));
        $data->setUser($user);
        $data->setValue(90);
        $manager->persist($data);

        $data = new Data();
        $data->setDataType($data_type);
        $data->setDate(new \DateTime("2023-02-26"));
        $data->setUser($user);
        $data->setValue(91.8);
        $manager->persist($data);

        $data = new Data();
        $data->setDataType($data_type);
        $data->setDate(new \DateTime("2023-02-16"));
        $data->setUser($user);
        $data->setValue(92);
        $manager->persist($data);

        $data = new Data();
        $data->setDataType($data_type);
        $data->setDate(new \DateTime("2023-02-10"));
        $data->setUser($user);
        $data->setValue(86);
        $manager->persist($data);

        $goal = new Goal();
        $goal->setUser($user);
        $goal->setValue(95);
        $goal->setName("Augmenter ma qualité de sommeil");
        $goal->setDataType($data_type);
        $goal->setDescription("J'aimerais atteindre les 95% de sommeil chaque nuit");
        $goal->setStartDate(new \DateTime("now"));
        $manager->persist($goal);


        $unitType = new UnitType();
        $unitType->setName("Mesures");
        $manager->persist($unitType);

        $unit = new Unit();
        $unit->setName("in");
        $unit->setUnitType($unitType);
        $manager->persist($unit);

        $unit = new Unit();
        $unit->setName("cm");
        $unit->setUnitType($unitType);
        $manager->persist($unit);

        $category = new Category();
        $category->setName("Poids");
        $manager->persist($category);

        $data_type = new DataType();
        $data_type->setName("Tour de taille");
        $data_type->setUnit($unit);
        $data_type->setCategory($category);
        $manager->persist($data_type);

        $data = new Data();
        $data->setDataType($data_type);
        $data->setDate(new \DateTime("now"));
        $data->setUser($user);
        $data->setValue(75);
        $manager->persist($data);

        $data = new Data();
        $data->setDataType($data_type);
        $data->setDate(new \DateTime("2023-02-18"));
        $data->setUser($user);
        $data->setValue(78.5);
        $manager->persist($data);

        $data = new Data();
        $data->setDataType($data_type);
        $data->setDate(new \DateTime("2023-02-10"));
        $data->setUser($user);
        $data->setValue(79.9);
        $manager->persist($data);

        $data = new Data();
        $data->setDataType($data_type);
        $data->setDate(new \DateTime("2023-02-01"));
        $data->setUser($user);
        $data->setValue(77.2);
        $manager->persist($data);

        $data = new Data();
        $data->setDataType($data_type);
        $data->setDate(new \DateTime("2023-01-01"));
        $data->setUser($user);
        $data->setValue(84);
        $manager->persist($data);

        // Create User and his data
        $user = new User();
        $user->setEmail('pellegrinpierre@hotmail.fr');
        $user->setRoles(['ROLE_USER']);

        $password = $this->hasher->hashPassword($user, 'pedroPtuconné69');
        $user->setPassword($password);

        $manager->persist($user);


        $unitType = new UnitType();
        $unitType->setName("Poids");
        $manager->persist($unitType);


        $unit = new Unit();
        $unit->setName("kg");
        $unit->setUnitType($unitType);
        $manager->persist($unit);

        $unit = new Unit();
        $unit->setName("lb");
        $unit->setUnitType($unitType);
        $manager->persist($unit);

        $data_type = new DataType();
        $data_type->setName("Suivi du poids");
        $data_type->setUnit($unit);
        $data_type->setCategory($category);
        $manager->persist($data_type);

        $data = new Data();
        $data->setDataType($data_type);
        $data->setDate(new \DateTime("now"));
        $data->setUser($user);
        $data->setValue(75);
        $manager->persist($data);

        $goal = new Goal();
        $goal->setUser($user);
        $goal->setValue(70);
        $goal->setName("Perdre 5 kilo");
        $goal->setDataType($data_type);
        $goal->setDescription("J'aimerais perdre de la masse graisseuse en faisant du sport");
        $goal->setStartDate(new \DateTime("now"));
        $manager->persist($goal);


        $manager->flush();
    }
}
