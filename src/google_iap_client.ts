import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapClientArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleIapClientArgs {
  brand: string;
  display_name: string;
  timeouts?: GoogleIapClientArgsTimeouts;
}

export class google_iap_client extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapClientArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_client", resourceName);
  }

  get brand(): string {
    return `${this.resourceType}.${this.resourceName}.brand`;
  }

  get client_id(): string {
    return `${this.resourceType}.${this.resourceName}.client_id`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get secret(): string {
    return `${this.resourceType}.${this.resourceName}.secret`;
  }
}
