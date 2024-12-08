import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogPolicyTagArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataCatalogPolicyTagArgs {
  description?: string;
  display_name: string;
  parent_policy_tag?: string;
  taxonomy: string;
  timeouts?: GoogleDataCatalogPolicyTagArgsTimeouts;
}

export class google_data_catalog_policy_tag extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataCatalogPolicyTagArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_policy_tag", resourceName);
  }

  get child_policy_tags(): string {
    return `${this.resourceType}.${this.resourceName}.child_policy_tags`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get taxonomy(): string {
    return `${this.resourceType}.${this.resourceName}.taxonomy`;
  }
}
