<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
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
        
        // Create User
        $user = new User();
        $user->setEmail('user@myfitlog.com');
        $user->setRoles(['ROLE_USER']);

        $password = $this->hasher->hashPassword($user, 'admin');
        $user->setPassword($password);

        $manager->persist($user);

        $manager->flush();
    }
}
