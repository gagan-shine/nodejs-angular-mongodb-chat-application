import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import {MatButtonModule} from '@angular/material/button';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatCardModule} from '@angular/material/card';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatChipsModule} from '@angular/material/chips';
// import {MatStepperModule} from '@angular/material/stepper';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatIconModule} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
// import {MatListModule} from '@angular/material/list';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatProgressBarModule} from '@angular/material/progress-bar';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatSelectModule} from '@angular/material/select';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatSliderModule} from '@angular/material/slider';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatSortModule} from '@angular/material/sort';
// import {MatTableModule} from '@angular/material/table';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatTreeModule} from '@angular/material/tree';
// import {OverlayModule} from '@angular/cdk/overlay';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { CKEditorModule } from 'ckeditor4-angular';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgxShimmerLoadingModule } from  'ngx-shimmer-loading';
import { ChartsModule } from 'ng2-charts';
import { NgSelect2Module } from 'ng-select2';
// import { AuthGuard } from './guard/auth.guard';




import { AppComponent } from './app.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { UsersComponent } from './components/users/users.component';
// import { CategoryComponent } from './components/category/category.component';
// import { ProductsComponent } from './components/products/products.component';
// import { PushNotificationsComponent } from './components/push-notifications/push-notifications.component';
// import { BlockedUsersComponent } from './components/blocked-users/blocked-users.component';
// import { ReportedUsersComponent } from './components/reported-users/reported-users.component';
// import { PagesComponent } from './components/pages/pages.component';
// import { SettingsComponent } from './components/settings/settings.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
// import { PromocodeComponent } from './components/promocode/promocode.component';
// import { FeedbackComponent } from './components/feedback/feedback.component';
// import { OrdersComponent } from './components/orders/orders.component';
// import { ProductTypeComponent } from './components/product-type/product-type.component';
// import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';
// import { ProductAddonsComponent } from './components/product-addons/product-addons.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot({
      closeButton: true,
      timeOut: 3000,
      extendedTimeOut: 1000,
      progressBar: true,
      maxOpened: 1,
    }),
    RouterModule.forRoot([
      { path: '', component: LoginComponent, data: { "title": "Login" } },
      { path: 'login', component: LoginComponent, data: { "title": "Login" } },
      // { path: 'dashboard', component: DashboardComponent, data: { "title": "Dashboard" } },
      // {  path: 'users',  component: UsersComponent,  data: { "title": "Users" },  canActivate: [AuthGuard] },
      // { path: 'category', component: CategoryComponent, data: { "title": "Category" } },
      // { path: 'products', component: ProductsComponent, data: { "title": "Products" } },
      // { path: 'product-type', component: ProductTypeComponent, data: { "title": "Products Type" } },
      // { path: 'promo-code', component: PromocodeComponent, data: { "title": "Promocodes" } },
      // { path: 'feedback', component: FeedbackComponent, data: { "title": "Feedbacks" } },
      // { path: 'orders', component: OrdersComponent, data: { "title": "Orders" } },
      // { path: 'pages', component: PagesComponent, data: { "title": "Pages" }, canActivate: [AuthGuard] },
      // { path: 'settings', component: SettingsComponent, data: { "title": "Settings" } },
      // { path: 'promo-banner', component: PromoBannerComponent, data: { "title": "PromoBanner" } },
      // { path: 'product-addons/:id', component: ProductAddonsComponent, data: { "title": "ProductAddons" } },
      // { path: '**', component: NotFoundComponent, data: { "title": "Not Found" } }
    ]),
    CKEditorModule,
    NgxShimmerLoadingModule,
    ChartsModule,
    NgSelect2Module
    // MatTabsModule
  ],
  declarations: [
    AppComponent,
    // DashboardComponent,
    // UsersComponent,
    // CategoryComponent,
    // ProductsComponent,
    // PushNotificationsComponent,
    // BlockedUsersComponent,
    // ReportedUsersComponent,
    // PagesComponent,
    // SettingsComponent,
    // SidebarComponent,
    // HeaderComponent,
    LoginComponent,
    // PromocodeComponent,
    // FeedbackComponent,
    // OrdersComponent,
    // ProductTypeComponent,
    // PromoBannerComponent,
    // ProductAddonsComponent,
    // FooterComponent,
    // NotFoundComponent,
  ],
  providers: [
    Title,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/