from django.contrib import admin

from .models import University, Department

class UniversityAdmin(admin.ModelAdmin):
    pass

class DepartmentAdmin(admin.ModelAdmin):
    pass

admin.site.register(University, UniversityAdmin)
admin.site.register(Department, DepartmentAdmin)
