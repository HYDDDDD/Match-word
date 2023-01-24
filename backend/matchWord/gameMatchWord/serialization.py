from rest_framework import serializers
from .models import User

# "return data" to JSON เพื่อให้ง่ายต่อการต่อหรือเรียกใช้ง่าย
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password',) #id django auto create แต่เราต้องใช้ id เพื่อเอามาอ้างอิงถึง user แต่ละคนจึงต้อง return มันออกมาด้วย


