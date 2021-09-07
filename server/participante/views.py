from django.shortcuts import render, redirect
from .forms import UserForm

# Create your views here.

def sigin(request):
    form = UserForm(request.POST or None, request.FILES or None)

    if form.is_valid():
        form.save()
        return redirect('/api/pesquisador')

    return render(request, 'registration/register.html', {'form': form})       