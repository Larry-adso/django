from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Evitar conflictos con el modelo User de Django
    groups = models.ManyToManyField(
        "auth.Group",
        related_name="customuser_set",  # Agrega un related_name único
        blank=True
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="customuser_permissions",  # Agrega un related_name único
        blank=True
    )

    def __str__(self):
        return self.username
