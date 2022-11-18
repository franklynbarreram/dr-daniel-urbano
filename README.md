## Docker usage

Develop server:

```bash
docker-compose up --build --force-recreate
```

Production server:

```bash
docker-compose -f docker-compose.production.yml up --build --force-recreate
```
