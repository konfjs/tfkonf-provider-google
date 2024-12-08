import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcarePipelineJobArgsBackfillPipelineJob {
  mapping_pipeline_job?: string;
}

export interface GoogleHealthcarePipelineJobArgsMappingPipelineJobFhirStreamingSource {
  description?: string;
  fhir_store: string;
}

export interface GoogleHealthcarePipelineJobArgsMappingPipelineJobMappingConfigWhistleConfigSource {
  import_uri_prefix: string;
  uri: string;
}

export interface GoogleHealthcarePipelineJobArgsMappingPipelineJobMappingConfig {
  description?: string;
  whistle_config_source?: GoogleHealthcarePipelineJobArgsMappingPipelineJobMappingConfigWhistleConfigSource;
}

export interface GoogleHealthcarePipelineJobArgsMappingPipelineJob {
  fhir_store_destination?: string;
  reconciliation_destination?: boolean;
  fhir_streaming_source?: GoogleHealthcarePipelineJobArgsMappingPipelineJobFhirStreamingSource;
  mapping_config: GoogleHealthcarePipelineJobArgsMappingPipelineJobMappingConfig;
}

export interface GoogleHealthcarePipelineJobArgsReconciliationPipelineJobMergeConfigWhistleConfigSource {
  import_uri_prefix: string;
  uri: string;
}

export interface GoogleHealthcarePipelineJobArgsReconciliationPipelineJobMergeConfig {
  description?: string;
  whistle_config_source: GoogleHealthcarePipelineJobArgsReconciliationPipelineJobMergeConfigWhistleConfigSource;
}

export interface GoogleHealthcarePipelineJobArgsReconciliationPipelineJob {
  fhir_store_destination?: string;
  matching_uri_prefix: string;
  merge_config: GoogleHealthcarePipelineJobArgsReconciliationPipelineJobMergeConfig;
}

export interface GoogleHealthcarePipelineJobArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleHealthcarePipelineJobArgs {
  dataset: string;
  disable_lineage?: boolean;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  backfill_pipeline_job?: GoogleHealthcarePipelineJobArgsBackfillPipelineJob;
  mapping_pipeline_job?: GoogleHealthcarePipelineJobArgsMappingPipelineJob;
  reconciliation_pipeline_job?: GoogleHealthcarePipelineJobArgsReconciliationPipelineJob;
  timeouts?: GoogleHealthcarePipelineJobArgsTimeouts;
}

export class google_healthcare_pipeline_job extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleHealthcarePipelineJobArgs) {
    const meta = {backfill_pipeline_job:{isBlock:true},mapping_pipeline_job:{isBlock:true,fhir_streaming_source:{isBlock:true},mapping_config:{isBlock:true,whistle_config_source:{isBlock:true}}},reconciliation_pipeline_job:{isBlock:true,merge_config:{isBlock:true,whistle_config_source:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_pipeline_job", resourceName);
  }

  get dataset(): string {
    return `${this.resourceType}.${this.resourceName}.dataset`;
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

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
