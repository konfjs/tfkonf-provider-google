import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageBucketArgsAutoclass {
  enabled: boolean;
}

export interface GoogleStorageBucketArgsCors {
  max_age_seconds?: number;
  method?: string[];
  origin?: string[];
  response_header?: string[];
}

export interface GoogleStorageBucketArgsCustomPlacementConfig {
  data_locations: string[];
}

export interface GoogleStorageBucketArgsEncryption {
  default_kms_key_name: string;
}

export interface GoogleStorageBucketArgsHierarchicalNamespace {
  enabled: boolean;
}

export interface GoogleStorageBucketArgsLifecycleRuleAction {
  storage_class?: string;
  type: string;
}

export interface GoogleStorageBucketArgsLifecycleRuleCondition {
  age?: number;
  created_before?: string;
  custom_time_before?: string;
  days_since_custom_time?: number;
  days_since_noncurrent_time?: number;
  matches_prefix?: string[];
  matches_storage_class?: string[];
  matches_suffix?: string[];
  noncurrent_time_before?: string;
  num_newer_versions?: number;
  send_age_if_zero?: boolean;
  send_days_since_custom_time_if_zero?: boolean;
  send_days_since_noncurrent_time_if_zero?: boolean;
  send_num_newer_versions_if_zero?: boolean;
}

export interface GoogleStorageBucketArgsLifecycleRule {
  action: GoogleStorageBucketArgsLifecycleRuleAction;
  condition: GoogleStorageBucketArgsLifecycleRuleCondition;
}

export interface GoogleStorageBucketArgsLogging {
  log_bucket: string;
}

export interface GoogleStorageBucketArgsRetentionPolicy {
  is_locked?: boolean;
  retention_period: number;
}

export interface GoogleStorageBucketArgsSoftDeletePolicy {
  retention_duration_seconds?: number;
}

export interface GoogleStorageBucketArgsTimeouts {
  create?: string;
  read?: string;
  update?: string;
}

export interface GoogleStorageBucketArgsVersioning {
  enabled: boolean;
}

export interface GoogleStorageBucketArgsWebsite {
  main_page_suffix?: string;
  not_found_page?: string;
}

export interface GoogleStorageBucketArgs {
  default_event_based_hold?: boolean;
  enable_object_retention?: boolean;
  force_destroy?: boolean;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  requester_pays?: boolean;
  storage_class?: string;
  autoclass?: GoogleStorageBucketArgsAutoclass;
  cors?: GoogleStorageBucketArgsCors[];
  custom_placement_config?: GoogleStorageBucketArgsCustomPlacementConfig;
  encryption?: GoogleStorageBucketArgsEncryption;
  hierarchical_namespace?: GoogleStorageBucketArgsHierarchicalNamespace;
  lifecycle_rule?: GoogleStorageBucketArgsLifecycleRule[];
  logging?: GoogleStorageBucketArgsLogging;
  retention_policy?: GoogleStorageBucketArgsRetentionPolicy;
  soft_delete_policy?: GoogleStorageBucketArgsSoftDeletePolicy;
  timeouts?: GoogleStorageBucketArgsTimeouts;
  versioning?: GoogleStorageBucketArgsVersioning;
  website?: GoogleStorageBucketArgsWebsite;
}

export class google_storage_bucket extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleStorageBucketArgs) {
    const meta = {autoclass:{isBlock:true},cors:{isBlock:true},custom_placement_config:{isBlock:true},encryption:{isBlock:true},hierarchical_namespace:{isBlock:true},lifecycle_rule:{isBlock:true,action:{isBlock:true},condition:{isBlock:true}},logging:{isBlock:true},retention_policy:{isBlock:true},soft_delete_policy:{isBlock:true},timeouts:{isBlock:true},versioning:{isBlock:true},website:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_storage_bucket", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get project_number(): string {
    return `${this.resourceType}.${this.resourceName}.project_number`;
  }

  get public_access_prevention(): string {
    return `${this.resourceType}.${this.resourceName}.public_access_prevention`;
  }

  get rpo(): string {
    return `${this.resourceType}.${this.resourceName}.rpo`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uniform_bucket_level_access(): string {
    return `${this.resourceType}.${this.resourceName}.uniform_bucket_level_access`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
