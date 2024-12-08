import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapBrandArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleIapBrandArgs {
  application_title: string;
  support_email: string;
  timeouts?: GoogleIapBrandArgsTimeouts;
}

export class google_iap_brand extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapBrandArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_brand", resourceName);
  }

  get application_title(): string {
    return `${this.resourceType}.${this.resourceName}.application_title`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get org_internal_only(): string {
    return `${this.resourceType}.${this.resourceName}.org_internal_only`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get support_email(): string {
    return `${this.resourceType}.${this.resourceName}.support_email`;
  }
}
