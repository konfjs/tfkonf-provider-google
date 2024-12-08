import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeBackendServiceSignedUrlKeyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeBackendServiceSignedUrlKeyArgs {
  backend_service: string;
  key_value: string;
  name: string;
  timeouts?: GoogleComputeBackendServiceSignedUrlKeyArgsTimeouts;
}

export class google_compute_backend_service_signed_url_key extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeBackendServiceSignedUrlKeyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_backend_service_signed_url_key", resourceName);
  }

  get backend_service(): string {
    return `${this.resourceType}.${this.resourceName}.backend_service`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_value(): string {
    return `${this.resourceType}.${this.resourceName}.key_value`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
