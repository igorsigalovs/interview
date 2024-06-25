import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { routes } from './app-routing.module';

describe('AppComponent', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        ToolbarComponent,
        HomepageComponent,
        AboutUsComponent,
      ], // include all components involved
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should navigate to home', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.navigate(['']);
    tick(); // simulate the passage of time until all pending asynchronous activities finish
    fixture.detectChanges(); // Update the view
    expect(router.url).toEqual('/');
  }));


  it('should render home content', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.navigate(['']);
    tick();  // Simulate time passing
    fixture.detectChanges();  // Update the view
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'App is running!'
    );
  }));

  it('should navigate to about us', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.navigate(['about-us']);
    tick(); // simulate the passage of time until all pending asynchronous activities finish
    fixture.detectChanges(); // Update the view
    expect(router.url).toEqual('/about-us');
  }));

  it('should render about us content', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.navigate(['/about-us']);
    tick();  // Simulate time passing
    fixture.detectChanges();  // Update the view
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled);
    expect(compiled.querySelector('p')?.textContent).toContain(
      'about-us works!'
    );
  }));
});
