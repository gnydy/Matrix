# QA Checklist — Landing Pages Batch

## File QA
- [ ] 20 project folders exist.
- [ ] 20 ZIP files exist.
- [ ] Each project has README.md.
- [ ] Each project has run.ps1, build.ps1, zip.ps1.
- [ ] Each project has package.json.
- [ ] Each project has app, components, data, lib, public, styles.

## Frontend QA
- [ ] Hero renders correctly.
- [ ] CTA buttons are visible on mobile.
- [ ] Navigation works with anchor links.
- [ ] Lead form is visible and styled.
- [ ] FAQ renders correctly.
- [ ] No empty sections.
- [ ] No broken imports.
- [ ] Responsive design checked at 390px, 768px, 1024px, 1440px.

## Build QA
Run:
```powershell
npm install
npm run build
```

## Commercial QA
- [ ] Template has clear target client.
- [ ] Template has clear use case.
- [ ] Template has editable mock data.
- [ ] Template is sellable as a ZIP.
- [ ] Template has customization path.
