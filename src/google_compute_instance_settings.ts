import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeInstanceSettingsArgsMetadata {
  items?: { [key: string]: string };
}

export interface GoogleComputeInstanceSettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeInstanceSettingsArgs {
  zone: string;
  metadata?: GoogleComputeInstanceSettingsArgsMetadata;
  timeouts?: GoogleComputeInstanceSettingsArgsTimeouts;
}

export class google_compute_instance_settings extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeInstanceSettingsArgs) {
    const meta = {metadata:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_instance_settings", resourceName);
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
