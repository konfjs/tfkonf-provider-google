import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetappKmsconfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetappKmsconfigArgs {
  crypto_key_name: string;
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  timeouts?: GoogleNetappKmsconfigArgsTimeouts;
}

export class google_netapp_kmsconfig extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetappKmsconfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_netapp_kmsconfig", resourceName);
  }

  get crypto_key_name(): string {
    return `${this.resourceType}.${this.resourceName}.crypto_key_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instructions(): string {
    return `${this.resourceType}.${this.resourceName}.instructions`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
