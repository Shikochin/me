/* eslint-disable no-console */
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

// import { LayoutProjectionModule } from "@layout-projection/angular";
import { AppComponent } from "./app/app.component";
import { AppRoutingModule } from "./app/app-routing.module";
import { environment } from "./environments/environment";
import { enableAnalytics } from "./util/enableAnalytics";

if (environment.production) {
	enableProdMode();
	enableAnalytics();
}

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			BrowserModule,
			AppRoutingModule,
			RouterModule,
			MatSidenavModule,
			MatToolbarModule,
			MatIconModule,
			MatButtonModule,
			MatListModule,
			MatProgressBarModule
			// LayoutProjectionModule.forRoot()
		),
		provideAnimations(),
		provideHttpClient(withInterceptorsFromDi()),
	],
}).catch(console.error);

addEventListener("unhandledrejection", console.error);
