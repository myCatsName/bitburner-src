<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [bitburner](./bitburner.md) &gt; [Corporation](./bitburner.corporation.md) &gt; [issueNewShares](./bitburner.corporation.issuenewshares.md)

## Corporation.issueNewShares() method

Issue new shares

**Signature:**

```typescript
issueNewShares(amount?: number): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | number | _(Optional)_ Number of new shares to issue, will be rounded to nearest 10m. Defaults to max amount. |

**Returns:**

number

Amount of funds generated for the corporation.
