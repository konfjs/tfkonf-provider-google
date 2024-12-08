import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleStorageBucketObjectArgs {
  bucket?: string;
  name?: string;
}

export class data_google_storage_bucket_object extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleStorageBucketObjectArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_storage_bucket_object", resourceName);
  }

  get cache_control(): string {
    return `data.${this.resourceType}.${this.resourceName}.cache_control`;
  }

  get content(): string {
    return `data.${this.resourceType}.${this.resourceName}.content`;
  }

  get content_disposition(): string {
    return `data.${this.resourceType}.${this.resourceName}.content_disposition`;
  }

  get content_encoding(): string {
    return `data.${this.resourceType}.${this.resourceName}.content_encoding`;
  }

  get content_language(): string {
    return `data.${this.resourceType}.${this.resourceName}.content_language`;
  }

  get content_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.content_type`;
  }

  get crc32c(): string {
    return `data.${this.resourceType}.${this.resourceName}.crc32c`;
  }

  get customer_encryption(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_encryption`;
  }

  get detect_md5hash(): string {
    return `data.${this.resourceType}.${this.resourceName}.detect_md5hash`;
  }

  get event_based_hold(): string {
    return `data.${this.resourceType}.${this.resourceName}.event_based_hold`;
  }

  get generation(): string {
    return `data.${this.resourceType}.${this.resourceName}.generation`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_name`;
  }

  get md5hash(): string {
    return `data.${this.resourceType}.${this.resourceName}.md5hash`;
  }

  get media_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.media_link`;
  }

  get metadata(): string {
    return `data.${this.resourceType}.${this.resourceName}.metadata`;
  }

  get output_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.output_name`;
  }

  get retention(): string {
    return `data.${this.resourceType}.${this.resourceName}.retention`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get source(): string {
    return `data.${this.resourceType}.${this.resourceName}.source`;
  }

  get storage_class(): string {
    return `data.${this.resourceType}.${this.resourceName}.storage_class`;
  }

  get temporary_hold(): string {
    return `data.${this.resourceType}.${this.resourceName}.temporary_hold`;
  }
}
