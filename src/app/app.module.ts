import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

//import { ServiceWorkerModule } from "@angular/service-worker";
//import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		RouterModule,
		// ServiceWorkerModule.register("ngsw-worker.js", {
		// 	enabled: environment.production,
		// 	// Register the ServiceWorker as soon as the application is stable
		// 	// or after 30 seconds (whichever comes first).
		// 	registrationStrategy: "registerWhenStable:30000",
		// }),
		HttpClientModule,
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		MatProgressBarModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
