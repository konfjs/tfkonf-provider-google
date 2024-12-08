import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageBucketObjectArgsCustomerEncryption {
  encryption_algorithm?: string;
  encryption_key: string;
}

export interface GoogleStorageBucketObjectArgsRetention {
  mode: string;
  retain_until_time: string;
}

export interface GoogleStorageBucketObjectArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleStorageBucketObjectArgs {
  bucket: string;
  cache_control?: string;
  content_disposition?: string;
  content_encoding?: string;
  content_language?: string;
  detect_md5hash?: string;
  event_based_hold?: boolean;
  metadata?: { [key: string]: string };
  name: string;
  source?: string;
  temporary_hold?: boolean;
  customer_encryption?: GoogleStorageBucketObjectArgsCustomerEncryption;
  retention?: GoogleStorageBucketObjectArgsRetention;
  timeouts?: GoogleStorageBucketObjectArgsTimeouts;
}

export class google_storage_bucket_object extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageBucketObjectArgs) {
    const meta = {customer_encryption:{isBlock:true},retention:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_storage_bucket_object", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get content(): string {
    return `${this.resourceType}.${this.resourceName}.content`;
  }

  get content_type(): string {
    return `${this.resourceType}.${this.resourceName}.content_type`;
  }

  get crc32c(): string {
    return `${this.resourceType}.${this.resourceName}.crc32c`;
  }

  get generation(): string {
    return `${this.resourceType}.${this.resourceName}.generation`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_name(): string {
    return `${this.resourceType}.${this.resourceName}.kms_key_name`;
  }

  get md5hash(): string {
    return `${this.resourceType}.${this.resourceName}.md5hash`;
  }

  get media_link(): string {
    return `${this.resourceType}.${this.resourceName}.media_link`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get output_name(): string {
    return `${this.resourceType}.${this.resourceName}.output_name`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get storage_class(): string {
    return `${this.resourceType}.${this.resourceName}.storage_class`;
  }
}
