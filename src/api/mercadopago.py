import mercadopago
import os

sdk = mercadopago.SDK(os.getenv("PROD_ACCESS_TOKEN"))