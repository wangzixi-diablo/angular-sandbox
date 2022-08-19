# Jerry's Sandbox

## remote url

https://github.com/wangzixi-diablo/angular-sandbox

## Entry point 

Check main.js, there is one line for root module definition:

```typescript
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

AppModule location: ./app/app.module

In this module:

```javascript
bootstrap: [AppComponent]
```

AppComponent location: src\app\app.component.ts

## Unit test

See sub folder unittest in app folder.