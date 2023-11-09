import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { DrMapService } from './dr-map.service';

@Component({
  selector: 'dr-map',
  templateUrl: './dr-map.component.html',
  styleUrls: ['./dr-map.component.scss'],
})
export class DrMapComponent implements OnInit {
  @Output() onClickSpot: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient, private service: DrMapService) {}

  ngOnInit() {
    // Appel à la fonction pour obtenir la géolocalisation de l'utilisateur
    this.getUserLocation();
  }

  getUserLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.initializeMap(latitude, longitude);
        },
        (error) => {
          // En cas de refus de la géolocalisation, utilisez la géolocalisation IP
          this.useIPGeolocation();
        }
      );
    } else {
      // Si la géolocalisation n'est pas prise en charge, utilisez la géolocalisation IP
      this.useIPGeolocation();
    }
  }

  useIPGeolocation() {
    fetch('https://ipinfo.io')
      .then((response) => response.json())
      .then((data) => {
        const [latitude, longitude] = data.loc.split(',').map(Number);
        this.initializeMap(latitude, longitude);
      })
      .catch((error) => {
        console.error('Erreur lors de la géolocalisation IP : ', error);
      });
  }

  initializeMap(latitude: number, longitude: number) {
    const map = L.map('world-map').setView([latitude, longitude], 6);

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
      }
    ).addTo(map);

    // Ajoutez un marqueur à Lyon
    const lyonMarker = L.marker([45.75, 4.85]).addTo(map);
    lyonMarker.bindPopup('Lyon, France').openPopup();

    // Parcourir le tableau et ajouter des marqueurs
    this.service.spots.data.forEach((location) => {
      const [latitude, longitude] = location.coordinates;
      const marker = L.marker([longitude, latitude]).addTo(map);
      marker.addEventListener('click', () => {
        this.onClickSpot.emit(true);
      });

      // Vous pouvez personnaliser les marqueurs ici si nécessaire
    });
  }
}
