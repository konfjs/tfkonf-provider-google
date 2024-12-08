import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudbuildv2ConnectionIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudbuildv2ConnectionIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition?: GoogleCloudbuildv2ConnectionIamBindingArgsCondition;
}

export class google_cloudbuildv2_connection_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudbuildv2ConnectionIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloudbuildv2_connection_iam_binding", resourceName);
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
