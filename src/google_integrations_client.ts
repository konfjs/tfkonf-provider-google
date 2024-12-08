import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIntegrationsClientArgsCloudKmsConfig {
  key: string;
  key_version?: string;
  kms_location: string;
  kms_project_id?: string;
  kms_ring: string;
}

export interface GoogleIntegrationsClientArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleIntegrationsClientArgs {
  create_sample_integrations?: boolean;
  location: string;
  run_as_service_account?: string;
  cloud_kms_config?: GoogleIntegrationsClientArgsCloudKmsConfig;
  timeouts?: GoogleIntegrationsClientArgsTimeouts;
}

export class google_integrations_client extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIntegrationsClientArgs) {
    const meta = {cloud_kms_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_integrations_client", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
