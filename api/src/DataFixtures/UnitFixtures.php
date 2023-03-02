<?php

namespace App\DataFixtures;

use App\Entity\Unit;
use App\Entity\UnitType;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UnitFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
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

        $unitType = new UnitType();
        $unitType->setName("Mesures");
        $manager->persist($unitType);

        $unit = new Unit();
        $unit->setName("cm");
        $unit->setUnitType($unitType);
        $manager->persist($unit);

        $unit = new Unit();
        $unit->setName("in");
        $unit->setUnitType($unitType);
        $manager->persist($unit);

        $unitType = new UnitType();
        $unitType->setName("Autre");
        $manager->persist($unitType);

        $unit = new Unit();
        $unit->setName("%");
        $unit->setUnitType($unitType);
        $manager->persist($unit);

        $unit = new Unit();
        $unit->setName("kg/cm2");
        $unit->setUnitType($unitType);
        $manager->persist($unit);

        $manager->flush();
    }
}
