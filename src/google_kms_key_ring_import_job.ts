import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsKeyRingImportJobArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleKmsKeyRingImportJobArgs {
  import_job_id: string;
  import_method: string;
  key_ring: string;
  protection_level: string;
  timeouts?: GoogleKmsKeyRingImportJobArgsTimeouts;
}

export class google_kms_key_ring_import_job extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleKmsKeyRingImportJobArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_kms_key_ring_import_job", resourceName);
  }

  get attestation(): string {
    return `${this.resourceType}.${this.resourceName}.attestation`;
  }

  get expire_time(): string {
    return `${this.resourceType}.${this.resourceName}.expire_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get import_job_id(): string {
    return `${this.resourceType}.${this.resourceName}.import_job_id`;
  }

  get import_method(): string {
    return `${this.resourceType}.${this.resourceName}.import_method`;
  }

  get key_ring(): string {
    return `${this.resourceType}.${this.resourceName}.key_ring`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get protection_level(): string {
    return `${this.resourceType}.${this.resourceName}.protection_level`;
  }

  get public_key(): string {
    return `${this.resourceType}.${this.resourceName}.public_key`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
