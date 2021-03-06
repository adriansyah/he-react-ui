import * as components from './components';

if (Object.keys) {
  Object.keys(components as any).forEach(key => {
    const item: any = (components as any)[key];
    if (typeof item === 'function') {
      item.displayName = key;
    }
  });
}

export * from './components';
