import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeProjectMetadataItemArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeProjectMetadataItemArgs {
  key: string;
  value: string;
  timeouts?: GoogleComputeProjectMetadataItemArgsTimeouts;
}

export class google_compute_project_metadata_item extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeProjectMetadataItemArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_project_metadata_item", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key(): string {
    return `${this.resourceType}.${this.resourceName}.key`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get value(): string {
    return `${this.resourceType}.${this.resourceName}.value`;
  }
}
