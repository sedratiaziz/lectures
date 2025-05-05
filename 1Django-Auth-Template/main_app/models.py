from django.db import models
from django.urls import reverse

from django.contrib.auth.models import User


# Create your models here.

MEALS = (
    ('B', 'Breakfast'),
    ('L', 'Lunch'),
    ('D', 'Dinner')
)
class Cat(models.Model):
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    age = models.IntegerField()
    toys = models.ManyToManyField("Toy")
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def get_absolute_url(self):
        # Use the 'reverse' function to dynamically find the URL for viewing this cat's details
        return reverse('cat-detail', kwargs={'cat_id': self.id})




    def __str__(self):
        return self.name
    
class Feeding(models.Model):
    date = models.DateField("Feeding Date")
    meal = models.CharField(
        max_length=1,
        # add the 'choices' field option
        choices=MEALS,
        # set the default value for meal to be 'B'
        default=MEALS[0][0]
    )
    # relationship with Cat model
    # if cat is deleted all its related fields will be deleted
    cat = models.ForeignKey(Cat, on_delete=models.CASCADE)

        # Define the default order of feedings
    class Meta:
        ordering = ['-date']  # This line makes the newest feedings appear first


    def __str__(self):
        # Nice method for obtaining the friendly value of a Field.choice
        return f"{self.meal} on {self.date}"
    

# Add the Toy model
class Toy(models.Model):
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=20)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('toy-detail', kwargs={'pk': self.id})