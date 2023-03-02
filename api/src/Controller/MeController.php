<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Routing\Annotation\Route;

class MeController extends AbstractController
{
    public function __construct(private Security $security)
    {

    }

    public function __invoke()
    {
        return $this->security->getUser();
    }

    /**
     * @Route("/me", name="get_me")
     */
    public function index(#[CurrentUser] ?User $user): JsonResponse
    {
        return new JsonResponse(json_encode($user));
    }
}
