import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePrivatecaCertificateTemplateIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePrivatecaCertificateTemplateIamBindingArgs {
  certificate_template: string;
  members: string[];
  role: string;
  condition?: GooglePrivatecaCertificateTemplateIamBindingArgsCondition;
}

export class google_privateca_certificate_template_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GooglePrivatecaCertificateTemplateIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_privateca_certificate_template_iam_binding", resourceName);
  }

  get certificate_template(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_template`;
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
