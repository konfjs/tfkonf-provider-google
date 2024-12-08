import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleStorageObjectSignedUrlArgs {
  bucket: string;
  content_md5?: string;
  content_type?: string;
  credentials?: string;
  duration?: string;
  extension_headers?: { [key: string]: string };
  http_method?: string;
  path: string;
}

export class data_google_storage_object_signed_url extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleStorageObjectSignedUrlArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_storage_object_signed_url", resourceName);
  }

  get bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get path(): string {
    return `data.${this.resourceType}.${this.resourceName}.path`;
  }

  get signed_url(): string {
    return `data.${this.resourceType}.${this.resourceName}.signed_url`;
  }
}
