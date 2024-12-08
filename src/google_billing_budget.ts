import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBillingBudgetArgsAllUpdatesRule {
  disable_default_iam_recipients?: boolean;
  enable_project_level_recipients?: boolean;
  monitoring_notification_channels?: string[];
  pubsub_topic?: string;
  schema_version?: string;
}

export interface GoogleBillingBudgetArgsAmountSpecifiedAmount {
  nanos?: number;
  units?: string;
}

export interface GoogleBillingBudgetArgsAmount {
  last_period_amount?: boolean;
  specified_amount?: GoogleBillingBudgetArgsAmountSpecifiedAmount;
}

export interface GoogleBillingBudgetArgsBudgetFilterCustomPeriodEndDate {
  day: number;
  month: number;
  year: number;
}

export interface GoogleBillingBudgetArgsBudgetFilterCustomPeriodStartDate {
  day: number;
  month: number;
  year: number;
}

export interface GoogleBillingBudgetArgsBudgetFilterCustomPeriod {
  end_date?: GoogleBillingBudgetArgsBudgetFilterCustomPeriodEndDate;
  start_date: GoogleBillingBudgetArgsBudgetFilterCustomPeriodStartDate;
}

export interface GoogleBillingBudgetArgsBudgetFilter {
  calendar_period?: string;
  credit_types_treatment?: string;
  projects?: string[];
  resource_ancestors?: string[];
  custom_period?: GoogleBillingBudgetArgsBudgetFilterCustomPeriod;
}

export interface GoogleBillingBudgetArgsThresholdRules {
  spend_basis?: string;
  threshold_percent: number;
}

export interface GoogleBillingBudgetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBillingBudgetArgs {
  billing_account: string;
  display_name?: string;
  ownership_scope?: string;
  all_updates_rule?: GoogleBillingBudgetArgsAllUpdatesRule;
  amount: GoogleBillingBudgetArgsAmount;
  budget_filter?: GoogleBillingBudgetArgsBudgetFilter;
  threshold_rules?: GoogleBillingBudgetArgsThresholdRules[];
  timeouts?: GoogleBillingBudgetArgsTimeouts;
}

export class google_billing_budget extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBillingBudgetArgs) {
    const meta = {all_updates_rule:{isBlock:true},amount:{isBlock:true,specified_amount:{isBlock:true}},budget_filter:{isBlock:true,custom_period:{isBlock:true,end_date:{isBlock:true},start_date:{isBlock:true}}},threshold_rules:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_billing_budget", resourceName);
  }

  get billing_account(): string {
    return `${this.resourceType}.${this.resourceName}.billing_account`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
