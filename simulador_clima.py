#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Simulador de Clima
Pide la temperatura y si está lloviendo, y da recomendaciones según las condiciones.
"""

def simulador_clima():
    """Simula el clima y da recomendaciones."""
    print("=== Simulador de Clima ===\n")
    
    # Pedir temperatura
    while True:
        try:
            temperatura = float(input("Ingresa la temperatura en grados: "))
            break
        except ValueError:
            print("Por favor, ingresa un número válido.")
    
    # Pedir si está lloviendo
    while True:
        lloviendo = input("¿Está lloviendo? (si/no): ").strip().lower()
        if lloviendo in ['si', 'sí', 'yes', 'y']:
            esta_lloviendo = True
            break
        elif lloviendo in ['no', 'n']:
            esta_lloviendo = False
            break
        else:
            print("Por favor, responde 'si' o 'no'.")
    
    # Lógica de recomendaciones
    print("\n--- Recomendación ---")
    
    if temperatura > 30 and not esta_lloviendo:
        print("Ve a la playa")
    elif temperatura < 15 or esta_lloviendo:
        print("Quédate en casa con una manta")
    else:
        print("Día normal, disfruta")

if __name__ == "__main__":
    simulador_clima()
