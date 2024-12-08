import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataflowJobArgsTimeouts {
  update?: string;
}

export interface GoogleDataflowJobArgs {
  enable_streaming_engine?: boolean;
  ip_configuration?: string;
  kms_key_name?: string;
  labels?: { [key: string]: string };
  machine_type?: string;
  max_workers?: number;
  name: string;
  network?: string;
  on_delete?: string;
  parameters?: { [key: string]: string };
  region?: string;
  service_account_email?: string;
  skip_wait_on_job_termination?: boolean;
  subnetwork?: string;
  temp_gcs_location: string;
  template_gcs_path: string;
  transform_name_mapping?: { [key: string]: string };
  zone?: string;
  timeouts?: GoogleDataflowJobArgsTimeouts;
}

export class google_dataflow_job extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataflowJobArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataflow_job", resourceName);
  }

  get additional_experiments(): string {
    return `${this.resourceType}.${this.resourceName}.additional_experiments`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get job_id(): string {
    return `${this.resourceType}.${this.resourceName}.job_id`;
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

  get temp_gcs_location(): string {
    return `${this.resourceType}.${this.resourceName}.temp_gcs_location`;
  }

  get template_gcs_path(): string {
    return `${this.resourceType}.${this.resourceName}.template_gcs_path`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
