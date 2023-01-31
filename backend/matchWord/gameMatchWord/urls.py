from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/<int:pk>', views.DetailUser.as_view()),
    path('treasurys/', views.TreasuryList.as_view(), name='treasury-list'),
    path('treasurys/<int:pk>', views.DetailTreasury.as_view()),
    path('scores/', views.ScoreList.as_view(), name='score-list'),
    path('scores/<int:pk>', views.DetailScore.as_view()),
    path('vocabularys/', views.VocabularyList.as_view(), name='vocabulary-list'),
    path('vocabulary/<int:pk>', views.DetailVocabulary.as_view()),
    path('', views.api_root)
]
