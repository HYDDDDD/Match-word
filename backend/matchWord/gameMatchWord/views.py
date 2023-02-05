from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .models import User, Treasury, Score, Vocabulary
from .serialization import UserSerializer, TreasurySerializer, ScoreSerializer, VocabularySerializer

# views send data or display in template(frontend)


class UserList (generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class DetailUser (generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class TreasuryList(generics.ListCreateAPIView):
    queryset = Treasury.objects.all()
    serializer_class = TreasurySerializer


class DetailTreasury (generics.RetrieveUpdateDestroyAPIView):
    queryset = Treasury.objects.all()
    serializer_class = TreasurySerializer


class ScoreList(generics.ListCreateAPIView):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer


class DetailScore (generics.RetrieveUpdateDestroyAPIView):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer


class VocabularyList(generics.ListCreateAPIView):
    queryset = Vocabulary.objects.all()
    serializer_class = VocabularySerializer


class DetailVocabulary (generics.RetrieveUpdateDestroyAPIView):
    queryset = Vocabulary.objects.all()
    serializer_class = VocabularySerializer


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'treasurys': reverse('treasury-list', request=request, format=format),
        'scores': reverse('score-list', request=request, format=format),
        'vocabularys': reverse('vocabulary-list', request=request, format=format)
    })
