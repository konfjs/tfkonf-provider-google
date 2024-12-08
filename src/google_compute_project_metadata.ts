import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeProjectMetadataArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeProjectMetadataArgs {
  metadata: { [key: string]: string };
  timeouts?: GoogleComputeProjectMetadataArgsTimeouts;
}

export class google_compute_project_metadata extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeProjectMetadataArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_project_metadata", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get metadata(): string {
    return `${this.resourceType}.${this.resourceName}.metadata`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
