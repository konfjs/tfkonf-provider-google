import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingMetricArgsBucketOptionsExplicitBuckets {
  bounds: number[];
}

export interface GoogleLoggingMetricArgsBucketOptionsExponentialBuckets {
  growth_factor: number;
  num_finite_buckets: number;
  scale: number;
}

export interface GoogleLoggingMetricArgsBucketOptionsLinearBuckets {
  num_finite_buckets: number;
  offset: number;
  width: number;
}

export interface GoogleLoggingMetricArgsBucketOptions {
  explicit_buckets?: GoogleLoggingMetricArgsBucketOptionsExplicitBuckets;
  exponential_buckets?: GoogleLoggingMetricArgsBucketOptionsExponentialBuckets;
  linear_buckets?: GoogleLoggingMetricArgsBucketOptionsLinearBuckets;
}

export interface GoogleLoggingMetricArgsMetricDescriptorLabels {
  description?: string;
  key: string;
  value_type?: string;
}

export interface GoogleLoggingMetricArgsMetricDescriptor {
  display_name?: string;
  metric_kind: string;
  unit?: string;
  value_type: string;
  labels?: GoogleLoggingMetricArgsMetricDescriptorLabels[];
}

export interface GoogleLoggingMetricArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleLoggingMetricArgs {
  bucket_name?: string;
  description?: string;
  disabled?: boolean;
  filter: string;
  label_extractors?: { [key: string]: string };
  name: string;
  value_extractor?: string;
  bucket_options?: GoogleLoggingMetricArgsBucketOptions;
  metric_descriptor?: GoogleLoggingMetricArgsMetricDescriptor;
  timeouts?: GoogleLoggingMetricArgsTimeouts;
}

export class google_logging_metric extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleLoggingMetricArgs) {
    const meta = {bucket_options:{isBlock:true,explicit_buckets:{isBlock:true},exponential_buckets:{isBlock:true},linear_buckets:{isBlock:true}},metric_descriptor:{isBlock:true,labels:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_metric", resourceName);
  }

  get filter(): string {
    return `${this.resourceType}.${this.resourceName}.filter`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
