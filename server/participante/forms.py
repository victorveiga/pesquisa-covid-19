from django.forms import ModelForm, PasswordInput, EmailInput
from django.contrib.auth.models import User, Permission

class UserForm(ModelForm):
    class Meta:
        model = User
        fields = [
            'username'   ,
            'password'   ,
            'email'      ,
            'first_name' , 
            'last_name'       
        ]
        labels = {
            'username': 'Nome de Usuário',
            'password': 'Senha'          ,
            'email': 'E-mail'            ,
            'first_name': 'Primeiro Nome', 
            'last_name': 'Último Nome' 
        }
        widgets = {
            'password': PasswordInput(attrs={'class':'form-control'}),
        }

    def save(self, commit=True):
        user = super (UserForm , self).save(commit=False)

        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.email = self.cleaned_data['email']
        user.set_password(self.cleaned_data['password'])
        user.is_staff = True

        if commit:
            user.save()
            pesrmission = Permission.objects.get(codename='view_dados')
            user.user_permissions.set([pesrmission.id])

        return user