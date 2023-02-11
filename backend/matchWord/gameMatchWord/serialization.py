from rest_framework import serializers
from .models import User, Treasury, Score, Vocabulary

# "return data" to JSON เพื่อให้ง่ายต่อการเข้าถึงข้อมูล


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # id django auto create แต่เราต้องใช้ id เพื่อเอามาอ้างอิงถึง user แต่ละคนจึงต้อง return มันออกมาด้วย หรือ สร้างเองก่อได้
        fields = ('user_id', 'username', 'email', 'password',)


class TreasurySerializer(serializers.ModelSerializer):
    class Meta:
        model = Treasury
        fields = ('treasury_id', 'treasury_title',
                  'treasury_date', 'total_vocab')


class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = ('score_id', 'score', 'vocab_correct', 'vocab_wrong')


class VocabularySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vocabulary
        fields = ('vocabulary_id', 'vocabulary',
                  'thai_vocab', 'vocab_status', 'treasury_id')
