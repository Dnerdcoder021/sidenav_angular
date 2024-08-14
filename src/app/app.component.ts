import { Component, ViewChild, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { Router } from '@angular/router';
import { faTabletScreenButton,faShieldHalved,faDisplay,faUpload,faEnvelope,faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from "@angular/cdk/layout";
import { DashboardComponent } from '../dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  CommonModule,DashboardComponent,FontAwesomeModule,MatMenuModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sidenav-material'; 
  isMobile = false;
  icon=faTabletScreenButton;
  icon2=faShieldHalved;
  icon3=faDisplay;
  upload=faUpload;
  envelope=faEnvelope;
  card=faIdCard;

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
 


  @HostListener('window:resize')
  onWindowResize() {
    const screenWidth = window.innerWidth;
    this.isMobile = screenWidth <= 800;
  }

  constructor(private  observer: BreakpointObserver,private router:Router){

  }
  

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    });
  }
  dashboard(){
    this.router.navigate(['/dashboard'])
    if(this.isMobile){
      this.sidenav.toggle();
    }
  }
  profile(){
    this.router.navigate(['/profile'])
    if(this.isMobile){
      this.sidenav.toggle();
    }
  }
}
