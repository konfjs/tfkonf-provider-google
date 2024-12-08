import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexDatascanArgsData {
  entity?: string;
  resource?: string;
}

export interface GoogleDataplexDatascanArgsDataProfileSpecExcludeFields {
  field_names?: string[];
}

export interface GoogleDataplexDatascanArgsDataProfileSpecIncludeFields {
  field_names?: string[];
}

export interface GoogleDataplexDatascanArgsDataProfileSpecPostScanActionsBigqueryExport {
  results_table?: string;
}

export interface GoogleDataplexDatascanArgsDataProfileSpecPostScanActions {
  bigquery_export?: GoogleDataplexDatascanArgsDataProfileSpecPostScanActionsBigqueryExport;
}

export interface GoogleDataplexDatascanArgsDataProfileSpec {
  row_filter?: string;
  sampling_percent?: number;
  exclude_fields?: GoogleDataplexDatascanArgsDataProfileSpecExcludeFields;
  include_fields?: GoogleDataplexDatascanArgsDataProfileSpecIncludeFields;
  post_scan_actions?: GoogleDataplexDatascanArgsDataProfileSpecPostScanActions;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecPostScanActionsBigqueryExport {
  results_table?: string;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecPostScanActions {
  bigquery_export?: GoogleDataplexDatascanArgsDataQualitySpecPostScanActionsBigqueryExport;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesNonNullExpectation {
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesRangeExpectation {
  max_value?: string;
  min_value?: string;
  strict_max_enabled?: boolean;
  strict_min_enabled?: boolean;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesRegexExpectation {
  regex: string;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesRowConditionExpectation {
  sql_expression: string;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesSetExpectation {
  values: string[];
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesSqlAssertion {
  sql_statement: string;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesStatisticRangeExpectation {
  max_value?: string;
  min_value?: string;
  statistic: string;
  strict_max_enabled?: boolean;
  strict_min_enabled?: boolean;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesTableConditionExpectation {
  sql_expression: string;
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRulesUniquenessExpectation {
}

export interface GoogleDataplexDatascanArgsDataQualitySpecRules {
  column?: string;
  description?: string;
  dimension: string;
  ignore_null?: boolean;
  name?: string;
  threshold?: number;
  non_null_expectation?: GoogleDataplexDatascanArgsDataQualitySpecRulesNonNullExpectation;
  range_expectation?: GoogleDataplexDatascanArgsDataQualitySpecRulesRangeExpectation;
  regex_expectation?: GoogleDataplexDatascanArgsDataQualitySpecRulesRegexExpectation;
  row_condition_expectation?: GoogleDataplexDatascanArgsDataQualitySpecRulesRowConditionExpectation;
  set_expectation?: GoogleDataplexDatascanArgsDataQualitySpecRulesSetExpectation;
  sql_assertion?: GoogleDataplexDatascanArgsDataQualitySpecRulesSqlAssertion;
  statistic_range_expectation?: GoogleDataplexDatascanArgsDataQualitySpecRulesStatisticRangeExpectation;
  table_condition_expectation?: GoogleDataplexDatascanArgsDataQualitySpecRulesTableConditionExpectation;
  uniqueness_expectation?: GoogleDataplexDatascanArgsDataQualitySpecRulesUniquenessExpectation;
}

export interface GoogleDataplexDatascanArgsDataQualitySpec {
  row_filter?: string;
  sampling_percent?: number;
  post_scan_actions?: GoogleDataplexDatascanArgsDataQualitySpecPostScanActions;
  rules?: GoogleDataplexDatascanArgsDataQualitySpecRules[];
}

export interface GoogleDataplexDatascanArgsExecutionSpecTriggerOnDemand {
}

export interface GoogleDataplexDatascanArgsExecutionSpecTriggerSchedule {
  cron: string;
}

export interface GoogleDataplexDatascanArgsExecutionSpecTrigger {
  on_demand?: GoogleDataplexDatascanArgsExecutionSpecTriggerOnDemand;
  schedule?: GoogleDataplexDatascanArgsExecutionSpecTriggerSchedule;
}

export interface GoogleDataplexDatascanArgsExecutionSpec {
  field?: string;
  trigger: GoogleDataplexDatascanArgsExecutionSpecTrigger;
}

export interface GoogleDataplexDatascanArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataplexDatascanArgs {
  data_scan_id: string;
  description?: string;
  display_name?: string;
  labels?: { [key: string]: string };
  location: string;
  data: GoogleDataplexDatascanArgsData;
  data_profile_spec?: GoogleDataplexDatascanArgsDataProfileSpec;
  data_quality_spec?: GoogleDataplexDatascanArgsDataQualitySpec;
  execution_spec: GoogleDataplexDatascanArgsExecutionSpec;
  timeouts?: GoogleDataplexDatascanArgsTimeouts;
}

export class google_dataplex_datascan extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataplexDatascanArgs) {
    const meta = {data:{isBlock:true},data_profile_spec:{isBlock:true,exclude_fields:{isBlock:true},include_fields:{isBlock:true},post_scan_actions:{isBlock:true,bigquery_export:{isBlock:true}}},data_quality_spec:{isBlock:true,post_scan_actions:{isBlock:true,bigquery_export:{isBlock:true}},rules:{isBlock:true,non_null_expectation:{isBlock:true},range_expectation:{isBlock:true},regex_expectation:{isBlock:true},row_condition_expectation:{isBlock:true},set_expectation:{isBlock:true},sql_assertion:{isBlock:true},statistic_range_expectation:{isBlock:true},table_condition_expectation:{isBlock:true},uniqueness_expectation:{isBlock:true}}},execution_spec:{isBlock:true,trigger:{isBlock:true,on_demand:{isBlock:true},schedule:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_datascan", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get data_scan_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_scan_id`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get execution_status(): string {
    return `${this.resourceType}.${this.resourceName}.execution_status`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
