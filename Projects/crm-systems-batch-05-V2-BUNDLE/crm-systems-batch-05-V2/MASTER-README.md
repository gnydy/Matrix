# CRM Systems Batch 05 V2

This batch contains 20 CRM frontend templates. Each one has a distinct CRM concept, UX structure, target client, and port.

Permanent rule: no future batch may rely on color/text changes only. Each template must differ in layout, UX, business positioning, and interaction model.

## Templates

- **Pipeline Command CRM** — `pipeline-command-crm` — Port `3080` — Pipeline board with deal lanes, win probability, and smart next actions
- **Account 360 CRM** — `account-360-crm` — Port `3081` — Customer 360 profile layout with relationship map, contracts, health score, and notes
- **Field Sales CRM** — `field-sales-crm` — Port `3082` — Territory route CRM with visit planning, check-ins, and opportunity heat cards
- **Real Estate Leads CRM** — `real-estate-leads-crm` — Port `3083` — Lead-to-viewing CRM with property matches, viewing calendar, and broker activity
- **Medical Patient CRM** — `medical-patient-crm` — Port `3084` — Patient journey CRM with appointment lifecycle, reminders, retention, and care notes
- **Agency Client CRM** — `agency-client-crm` — Port `3085` — Client success CRM with deliverables, campaigns, approvals, and account health
- **SaaS Revenue CRM** — `saas-revenue-crm` — Port `3086` — Revenue CRM with MRR, trial stages, expansion pipeline, and churn risks
- **Support Sales CRM** — `support-sales-crm` — Port `3087` — Inbox-driven CRM blending tickets, upsell signals, customer sentiment, and follow-up tasks
- **Automotive Dealer CRM** — `automotive-dealer-crm` — Port `3088` — Vehicle inquiry CRM with inventory match, test-drive board, and finance readiness
- **Education Admissions CRM** — `education-admissions-crm` — Port `3089` — Student admissions CRM with inquiry stages, document checklist, interviews, and enrollment forecast
- **Legal Client CRM** — `legal-client-crm` — Port `3090` — Legal client intake CRM with matter type, urgency, evidence checklist, and consult calendar
- **Fintech Investor CRM** — `fintech-investor-crm` — Port `3091` — Investor CRM with portfolio interest, compliance status, risk profile, and meeting notes
- **Hospitality Guest CRM** — `hospitality-guest-crm` — Port `3092` — Guest CRM with loyalty tier, stay history, preferences, complaints, and upsell journeys
- **Construction Bid CRM** — `construction-bid-crm` — Port `3093` — Bid pursuit CRM with tender stages, project value, decision makers, and submission checklist
- **E-commerce Retention CRM** — `ecommerce-retention-crm` — Port `3094` — Retention CRM with customer segments, cart recovery, lifecycle campaigns, and LTV cards
- **HR Recruitment CRM** — `hr-recruitment-crm` — Port `3095` — Candidate/client CRM with talent pools, hiring pipelines, interview feedback, and client needs
- **Nonprofit Donor CRM** — `nonprofit-donor-crm` — Port `3096` — Donor CRM with giving history, campaign engagement, pledges, and impact reporting
- **Insurance Broker CRM** — `insurance-broker-crm` — Port `3097` — Policy lifecycle CRM with renewal alerts, client risk profile, claims, and coverage gaps
- **Manufacturing B2B CRM** — `manufacturing-b2b-crm` — Port `3098` — Industrial account CRM with RFQs, technical specs, recurring orders, and distributor status
- **Executive Sales War Room** — `executive-sales-war-room` — Port `3099` — Executive overview with pipeline risk, forecasts, strategic accounts, and team performance

## Install All

```powershell
powershell -ExecutionPolicy Bypass -File ".\INSTALL-ALL.ps1"
```

## Run All

```powershell
powershell -ExecutionPolicy Bypass -File ".\RUN-ALL-20-PORTS.ps1"
```
