import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePrivatecaCaPoolIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePrivatecaCaPoolIamBindingArgs {
  ca_pool: string;
  members: string[];
  role: string;
  condition?: GooglePrivatecaCaPoolIamBindingArgsCondition;
}

export class google_privateca_ca_pool_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GooglePrivatecaCaPoolIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_privateca_ca_pool_iam_binding", resourceName);
  }

  get ca_pool(): string {
    return `${this.resourceType}.${this.resourceName}.ca_pool`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
